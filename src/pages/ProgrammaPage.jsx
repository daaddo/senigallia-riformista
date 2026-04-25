import "./ProgrammaPage.css";

const pdfUrl = `${import.meta.env.BASE_URL}customassets/programma/programma 26 web.pdf`;

function ProgrammaPage() {
  return (
    <div className="programma-page">
      <iframe
        src={pdfUrl}
        className="programma-page__viewer"
        title="Programma Progetto Senigallia Riformista 2026"
      />
    </div>
  );
}

export default ProgrammaPage;
