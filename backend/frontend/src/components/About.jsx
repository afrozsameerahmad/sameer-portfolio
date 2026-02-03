export default function About() {
  return (
    <section id="about" className="px-8 py-20 bg-slate-950">

      <h3 className="text-3xl font-bold text-center mb-12">
        About Me
      </h3>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left */}
        <div>
          <h4 className="text-xl font-semibold mb-4">
            Who Am I?
          </h4>

          <p className="text-slate-400 leading-relaxed">
            I am a first-year MCA student specializing in Data Science & AI.
            I have a strong foundation in Python, Pandas, NumPy, and Machine
            Learning. I enjoy building real-world data-driven solutions
            and continuously learning new technologies.
          </p>

          <p className="text-slate-400 mt-4 leading-relaxed">
            I have experience in EDA, visualization, feature engineering,
            and building ML models for prediction and analysis.
          </p>
        </div>

        {/* Right */}
        <div>
          <h4 className="text-xl font-semibold mb-4">
            Technical Skills
          </h4>

          <div className="space-y-3 text-slate-300">

            <p>✅ Python, SQL, Pandas, NumPy</p>
            <p>✅ Scikit-learn, XGBoost, ARIMA, Prophet</p>
            <p>✅ TensorFlow, Neural Networks</p>
            <p>✅ Matplotlib, Seaborn, Excel</p>
            <p>✅ MySQL, MS SQL</p>
            <p>✅ GitHub, VS Code, Jupyter</p>
            <p>✅ EDA, Feature Engineering, RMSE, MAPE</p>

          </div>
        </div>

      </div>
    </section>
  );
}
``
