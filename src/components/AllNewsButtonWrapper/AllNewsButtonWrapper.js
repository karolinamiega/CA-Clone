import './AllNewsButtonWrapper.css';
function AllNewsButtonWrapper(){
    return(
        <div className="All-news button-wrapper">
            <a href="#" className="All-news-link button-title">
                Visos Naujienos
                <svg xmlns='http://www.w3.org/2000/svg' width='19' height='33'>
                <path d='M2.535 32.526L.033 30.024l13.76-13.761L.034 2.502 2.535-.001 18.8 16.263z' fillRule='evenodd' />
                </svg>
            </a>
        </div>
    );
}
export default AllNewsButtonWrapper;