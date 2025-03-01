//components
import PageTitle from "./components/PageTitle";
import TopAppBar from "./components/TopAppBar";



const App = () => {
  return (
    <>
    {/*Meta Title*/}
    <PageTitle title='Synchat- Chat with SynChat to supercharge your ideas!' />

    <div className="">
      {/*SideBar*/}
      <div className="">
        {/*Top App Bar*/}
        <TopAppBar/>

        {/*main Content*/}
        <div className="">
          <div></div>
        </div>
        {/*Prompt Field*/}
        <div className="">
          <p className="">
            Synchat may display inaccurate info, please verify with the official sources.
            <a
            href="https://support.google.com/gemini?p=privacy_help"
            target= '_blank'
            className=""
            >
            Your privacy & Gemini Apps
            </a>

          </p>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
