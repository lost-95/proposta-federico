
import { Project, BlogPost, Skill } from './types';

export const SKILLS: Skill[] = [
  {
    category: "Programming & Core",
    items: ["Python", "SQL", "R", "Java", "Algorithms", "Data Structures"]
  },
  {
    category: "Data Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"]
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "XGBoost", "Clustering", "Regression"]
  },
  {
    category: "BI & Visualization",
    items: ["Power BI", "Tableau", "Excel (Advanced)", "Dash/Streamlit"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "sales-forecasting",
    title: "Prophetic Sales Forecasting",
    category: "Machine Learning / Regression",
    businessProblem: "A retail chain struggled with inventory overstocking and stockouts due to inaccurate demand predictions.",
    dataset: "Historical daily sales data (3 years) across 15 store locations.",
    tools: ["Python", "Scikit-learn", "Statsmodels", "ARIMA", "XGBoost"],
    methodology: "Implemented a hybrid ARIMA-XGBoost model to capture both seasonal trends and non-linear patterns. Applied feature engineering for holidays and promotions.",
    insights: [
      "Identified that local weather patterns had a 15% correlation with specific product categories.",
      "Promotional impact peaked at day 3 and decayed exponentially."
    ],
    impact: "Improved forecast accuracy by 22% (MAE), potentially saving the client $45k annually in storage costs.",
    image: "https://picsum.photos/seed/sales/800/600"
  },
  {
    id: "customer-segmentation",
    title: "Strategic Customer Segmentation",
    category: "Unsupervised Learning",
    businessProblem: "Marketing efforts were inefficient as all customers received the same promotional emails regardless of behavior.",
    dataset: "E-commerce transaction logs and user profile data.",
    tools: ["Python", "K-Means", "RFM Analysis", "PCA", "Seaborn"],
    methodology: "Conducted Recency, Frequency, Monetary (RFM) analysis. Used the Elbow method and Silhouette score to determine optimal clusters (k=5).",
    insights: [
      "Discovered a 'Hibernating' segment (high spenders who haven't visited in 6 months).",
      "Identified a 'Champions' segment responsible for 40% of revenue."
    ],
    impact: "Recommended targeted campaigns for each segment; pilot test showed 12% increase in re-engagement for hibernating users.",
    image: "https://picsum.photos/seed/customer/800/600"
  },
  {
    id: "market-trends-eda",
    title: "Exploratory Analysis: Tech Market Trends",
    category: "Data Visualization / EDA",
    businessProblem: "Investors needed a clear picture of emerging technologies in the UK/US job market to allocate startup funding.",
    dataset: "Scraped job postings and VC funding data from 2021-2024.",
    tools: ["Pandas", "Plotly", "Power BI", "NLTK"],
    methodology: "Performed text mining on job descriptions. Developed an interactive dashboard to visualize the rise of AI-related roles.",
    insights: [
      "Data engineering roles grew 3x faster than traditional data analyst roles in 2023.",
      "Hybrid work mentions increased by 150% in technical job postings."
    ],
    impact: "Provided data-driven evidence for a $2M seed investment strategy in AI-infrastructure companies.",
    image: "https://picsum.photos/seed/market/800/600"
  },
  {
    id: "finance-dashboard",
    title: "Executive Finance Dashboard",
    category: "Power BI",
    businessProblem: "The CFO lacked a real-time view of departmental spending vs. budget allocations.",
    dataset: "Internal ERP financial records and departmental budget sheets.",
    tools: ["Power BI", "DAX", "SQL Server", "Power Query"],
    methodology: "Built automated ETL pipelines in Power Query. Created complex DAX measures for Year-over-Year (YoY) performance and variance analysis.",
    insights: [
      "Detected a 12% budget leak in the IT procurement department.",
      "Identified that Q3 travel expenses consistently exceeded forecasts by 20%."
    ],
    impact: "Reduced monthly reporting time by 15 hours. Allowed leadership to reallocate $200k in unspent funds to R&D.",
    image: "https://picsum.photos/seed/finance/800/600"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "overfitting-explained",
    title: "Understanding Overfitting in Machine Learning",
    date: "March 15, 2024",
    preview: "Why does my model perform perfectly on training data but fail in production? Let's dive into the Bias-Variance tradeoff.",
    content: "Overfitting is a common pitfall in machine learning where a model learns the 'noise' in the training data rather than the underlying pattern. This post explores regularization techniques like L1 (Lasso) and L2 (Ridge) and how to use cross-validation to ensure your model generalizes well to new, unseen data.\n\n## Key Takeaways\n- Simpler models often generalize better.\n- Validation curves are your best friend.\n- Don't trust a 100% accuracy score.",
    tags: ["Machine Learning", "Tutorial"],
    readTime: "5 min"
  },
  {
    id: "eda-workflow",
    title: "From Raw Data to Insights: My EDA Workflow",
    date: "Feb 28, 2024",
    preview: "Exploratory Data Analysis is more than just plotting histograms. It's about asking the right questions.",
    content: "The first thing I do with any dataset isn't running a model; it's understanding the distributions, missing values, and outliers. In this article, I share my 5-step checklist for robust EDA, starting from data cleaning to hypothesis testing.\n\n## The Workflow\n1. Data Profiling\n2. Handling Missing Values\n3. Outlier Detection\n4. Correlation Analysis\n5. Feature Distribution Visualization",
    tags: ["Data Analysis", "Python"],
    readTime: "7 min"
  },
  {
    id: "sql-practical-cases",
    title: "SQL for Data Analysis: Practical Use Cases",
    date: "Jan 12, 2024",
    preview: "Mastering Window Functions and Subqueries: Moving beyond basic SELECT statements.",
    content: "SQL is the bread and butter of data analysis. While basic joins are easy, real-world business problems often require complex window functions like ROW_NUMBER(), RANK(), and LEAD(). This guide showcases how to solve cohort analysis and rolling averages using pure SQL.\n\n```sql\n-- Example of a rolling average\nSELECT \n  date,\n  revenue,\n  AVG(revenue) OVER(ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) as rolling_7d_avg\nFROM daily_sales;\n```",
    tags: ["SQL", "Databases"],
    readTime: "6 min"
  },
  {
    id: "predictive-model-journey",
    title: "How I Built My First Predictive Model",
    date: "Dec 05, 2023",
    preview: "A step-by-step reflection on my first end-to-end data science project, from scraping to deployment.",
    content: "Every data scientist remembers their first real project. For me, it was a house price predictor. It taught me more about feature engineering than any textbook ever could. I'll walk you through the mistakes I made and what I would do differently now.\n\n## Lessons Learned\n- Feature engineering is 80% of the work.\n- Simple linear regression is a strong baseline.\n- Documentation is critical for reproducibility.",
    tags: ["Career", "Projects"],
    readTime: "8 min"
  }
];
