import React, {useState} from 'react';
import {Document, Page} from 'react-pdf';
import samplePDF from '../JustinLuu.pdf';

const Resume = (props) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
    }

    return(
        <div>hi
            <Document file={samplePDF} options={{ workerSrc: "/pdf.worker.js" }} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}/>
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    )
}

export default Resume;