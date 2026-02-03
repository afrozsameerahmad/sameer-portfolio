import API from "../api";
import { useEffect, useState } from "react";

export default function ResumeList() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    axios
      API.get("resume/") // your Django API
      .then((res) => setResumes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Resumes</h2>
      {resumes.length === 0 && <p className="text-white">No resumes found.</p>}
      <ul>
        {resumes.map((r) => (
          <li key={r.id} className="mb-2">
            <span className="text-white mr-2">{r.title}</span>
            {r.file && (
              <a
                href={r.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Download
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
