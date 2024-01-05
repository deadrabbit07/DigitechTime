// import { useMediaQuery } from "react-responsive";
// const Mobile :React.FC<{ children : ReactNode}> = ({children}) => {
//     const isMobile = useMediaQuery({
//         query : "(max-width: 360px)"
//     });

//     return <>{isMobile && children}</>
// }

// const PC :React.FC<{ children : ReactNode }> = ({children}) => {
//     const isPc = useMediaQuery({
//         query : "(min-width: 361px)"
//     });
//     return <>{isPc && children}</>
// }

// export {Mobile, PC}

function App() {

    return (
        <>
        <header>
            <p>Digitech Time</p>
            <button>로그인</button>
        </header>
        <div className="container">
            <div className="box-wrap">
                <div className="box">
                    <p>인공과</p>
                </div>
                <div className="box">
                    <p>게임과</p>
                </div>
            </div>
            
            <div className="main">
                <p>전체 글</p>
                <img className="img"src="img/pass.png" alt="" />
                <h2>로그인 후 이용해주세요.</h2>
            </div>
        </div>

        </>
    )
}

export default App
