import 'tailwindcss/tailwind.css';
import ResumeShow from "./ResumeShow";


    
    function Resume () {

        const handleDownload = () => {
            const link = document.createElement("a");
            const url = "https://drive.google.com/file/d/1DXwnxokh7pNA7DTGvQtaa0zz1n6tl_qN/view?usp=share_link";
            link.download = "MaeSchreckResume2023.pdf";
            window.open(url, '_blank');
    };

    return (
        <div className="main-background text-color">
            <div>
                <ResumeShow/>
            <div className ="pb-32 flex justify-center">
                <button className ="btn bg-slate-400 flex justify-center text-3xl font-bold pt-.5 btn-circle w-80 inline-block opacity-100 hover:opacity-30 pb-10 pt-2 animate-pulse text-rose-600" 
                        onClick={handleDownload}>Download Resume
                </button>
            </div>
            </div>
        </div>


    )

    } 

    export default Resume;




    // const handleDownload = () => {
    //     const link = document.createElement("a");
    //     const url = "https://drive.google.com/file/d/1DXwnxokh7pNA7DTGvQtaa0zz1n6tl_qN/view?usp=share_link";
    //     // link.href = "https://drive.google.com/file/d/1DXwnxokh7pNA7DTGvQtaa0zz1n6tl_qN/view?usp=share_link";
    //     link.download = "MaeSchreckResume2023.pdf";
    //     window.open(url, '_blank');

    // const loadPdfFromGoogleDrive = async (pdfUrl) => {
    //     const response = await fetch(`https://drive.google.com/file/d/1DXwnxokh7pNA7DTGvQtaa0zz1n6tl_qN/view?usp=share_link`);
    //     const arrayBuffer = await response.arrayBuffer();
    //     const pdf = await pdfjsLib.getDocument({ data: arrayBuffer });
    //     return pdf;
    //   };




    // const handleDownload = async () => {
    //     const pdf = await loadPdfFromGoogleDrive(`https://drive.google.com/file/d/1DXwnxokh7pNA7DTGvQtaa0zz1n6tl_qN/view?usp=share_link`);
    //     const blob = await pdf.getBlob();
    //     const url = URL.createObjectURL(blob);
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.target = "_blank"; // this opens the link in a new tab
    //     a.download = 'resume.pdf';
    //     a.click();
    //   };





// function Resume() {
//     const viewerRef = useRef(null);

//     useEffect(() => {
//         const viewer = new Viewer(viewerRef.current, {
//         url:
//             "https://drive.google.com/file/d/1DXwnxokh7pNA7DTGvQtaa0zz1n6tl_qN/preview",
//         navbar: false,
//         toolbar: false,
//         title: "Mae Schreck Resume",
//         button: false,
//         initialViewIndex: 1,
//         // Add these options to enable PDF support
//         viewed() {
//             viewer.zoomTo(1);
//         },
//         filter(image) {
//             if (image.type === "pdf") {
//             return true;
//             }
//         },
//         });
//         return () => {
//         viewer.destroy();
//         };
//     }, []);

//     const handleDownload = () => {
//         const link = document.createElement("a");
//         link.href = "https://drive.google.com/uc?id=1DXwnxokh7pNA7DTGvQtaa0zz1n6tl_qN";
//         link.download = "MaeSchreckResume2023.pdf";
//         link.click();
//     };

//     return (
//         <div>
//         <div ref={viewerRef} />
//         <button onClick={handleDownload}>Download Resume</button>
//         </div>
//     );
//     }

// export default Resume;








    // https://drive.google.com/file/d/1DXwnxokh7pNA7DTGvQtaa0zz1n6tl_qN/view?usp=share_link






// function Resume() {


//     return (
//         <div>

//         </div>
//         );
//     };


// export default Resume;




// const resumeUrl = './MaeSchreckResume.jpeg';





// import { Document, Page } from 'react-pdf';

// function Resume() {
//     const [numPages, setNumPages] = useState(1);
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }

//     return (
//         <div>
//         <Document file="" onLoadSuccess={onDocumentLoadSuccess}>
//             <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//             Page {pageNumber} of {numPages}
//         </p>
//         </div>
//     );
//     }