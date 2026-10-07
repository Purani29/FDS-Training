function Projects() {

  return (
    <section id="projects" className="section">

      <h2>My Projects</h2>

      <div className="projects-container">

        <div className="project-card">

          <h3>Social Media User Grouping</h3>

          <p>
            A machine learning project that groups social media
            users using K-Means clustering.
          </p>

          <p>
            <strong>Technology:</strong> Python, Machine Learning
          </p>

        </div>


        <div className="project-card">

          <h3>Women Safety Application</h3>

          <p>
            An application designed to provide useful safety
            features and emergency assistance.
          </p>

          <p>
            <strong>Technology:</strong> HTML, CSS, JavaScript
          </p>

        </div>


        <div className="project-card">

          <h3>Automated Medical Image Diagnosis</h3>

          <p>
            A deep learning project that uses transfer learning
            to classify chest X-ray images.
          </p>

          <p>
            <strong>Technology:</strong> Python, TensorFlow, Keras
          </p>

        </div>


        <div className="project-card">

          <h3>Faculty Management System</h3>

          <p>
            A full-stack application for managing faculty
            information and performing CRUD operations.
          </p>

          <p>
            <strong>Technology:</strong> React, Spring Boot
          </p>

        </div>

      </div>

    </section>
  );
}

export default Projects;