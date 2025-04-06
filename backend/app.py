from flask import Flask, render_template, request
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import nltk
from nltk.corpus import stopwords
import string
import requests
from bs4 import BeautifulSoup

# Download stopwords
nltk.download('stopwords')

app = Flask(__name__)

# Sample training data for the AI Agent
ideas = [
    "AI-based chatbot for customer service",
    "E-commerce platform with personalized recommendations",
    "Mobile wallet for seamless transactions",
    "Online learning platform with interactive features",
    "Blockchain-based supply chain management",
    "Health monitoring app with real-time alerts"
]

labels = [
    "AI",
    "E-commerce",
    "Fintech",
    "EdTech",
    "Blockchain",
    "Healthcare"
]

# Preprocessing function
def preprocess(text):
    text = text.lower()
    text = ''.join([char for char in text if char not in string.punctuation])
    words = text.split()
    words = [word for word in words if word not in stopwords.words('english')]
    return ' '.join(words)

# Prepare the AI Agent
vectorizer = CountVectorizer()
X = vectorizer.fit_transform([preprocess(idea) for idea in ideas])
model = MultinomialNB()
model.fit(X, labels)

# Sector-specific insights (static for now, can be enhanced with APIs later)
sector_insights = {
    "AI": "AI is a booming field with applications in healthcare, finance, and customer service. Market growth is expected at 35% CAGR by 2030.",
    "E-commerce": "E-commerce is rapidly expanding, with increasing trends in personalization and seamless delivery services.",
    "Fintech": "Fintech is revolutionizing financial services, but strict regulations and security concerns remain a challenge.",
    "EdTech": "The EdTech market is booming, with increased focus on personalized learning and gamified content.",
    "Blockchain": "Blockchain is transforming supply chain management and secure transactions, but adoption challenges persist.",
    "Healthcare": "Healthcare innovations are solving real-world problems, but privacy concerns and regulatory approvals are key challenges."
}

# Analyze and generate a report
def generate_report(idea, sector):
    # Simulated research and insights
    market_trend = sector_insights.get(sector, "No data available.")
    challenges = {
        "AI": "Data privacy and model bias are the biggest challenges in AI adoption.",
        "E-commerce": "Logistics management and customer retention pose challenges.",
        "Fintech": "Compliance with regulations and security risks need to be addressed.",
        "EdTech": "Ensuring consistent engagement and keeping pace with technology is crucial.",
        "Blockchain": "Scalability and lack of widespread adoption remain concerns.",
        "Healthcare": "Data privacy and clinical trial validations are key challenges."
    }

    # Create a detailed report
    report = f"""
    ✅ **Idea:** {idea}
    
    📈 **Sector:** {sector}
    
    📊 **Market Trend:** {market_trend}
    
    ⚠️ **Potential Challenges:** {challenges.get(sector, 'No identified challenges')}
    
    💡 **Recommendations:** Focus on innovation, ensure compliance, and leverage user feedback for improvements.
    """
    return report

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/validate', methods=['POST'])
def validate():
    idea = request.form['idea']
    if not idea.strip():
        return render_template('index.html', error="Please enter a startup idea to validate.")
    
    # Predict the sector
    idea_clean = preprocess(idea)
    idea_vector = vectorizer.transform([idea_clean])
    sector = model.predict(idea_vector)[0]
    
    # Generate detailed report
    report = generate_report(idea, sector)
    
    return render_template('index.html', idea=idea, result=report)

if __name__ == '__main__':
    app.run(debug=True)
