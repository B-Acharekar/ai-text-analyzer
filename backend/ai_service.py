import os
import json
from dotenv import load_dotenv
from  google import genai
load_dotenv()
client = genai.Client(api_key=os.getenv("GENAI_API_KEY"))

def analyze_txt(text: str):
    prompt = f"""
Your are an expert TEXT analyst. 
Analyze the following text and provide insights such as:
Return ONLY valid JSON. Do not add explanations.
Format:
{{

  "sentiment": "Positive | Neutral | Negative",
  "score": 0-100,
  "summary": "2 sentence summary",
  "key_points": ["point1", "point2", "point3"]
}}
---
TEXT TO ANALYZE: {text} 
"""
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash", 
            contents=prompt,
            config = {
                "temperature": 0.2,
                "response_mime_type":"application/json"
            }
        )
        data = json.loads(response.text)

        # 1. Validate Sentiment (Strict check)
        valid_sentiments = ["Positive", "Neutral", "Negative"]
        if data.get("sentiment") not in valid_sentiments:
            data["sentiment"] = "Neutral" # Fallback instead of crashing

        # 2. Validate Summary (Basic length check)
        if not data.get("summary") or len(data["summary"]) < 5:
            data["summary"] = "Summary unavailable."

        # 3. Validate Key Points (The Fix)
        points = data.get("key_points")
        if isinstance(points, list):
            # If too many, slice them. If too few, that's fine.
            data["key_points"] = points[:3]
        else:
            # If it's not a list at all, provide a default list
            data["key_points"] = ["No points extracted."]
        
        return data

    except json.JSONDecodeError:
        print("❌ ERROR: AI failed to return valid JSON syntax.")
    except Exception as e:
        print(f"❌ ERROR: {e}")

