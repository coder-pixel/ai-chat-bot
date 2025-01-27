import { useRef } from "react";

const NewPrompt = () => {
  const endRef = useRef(null);
  const formRef = useRef(null);

  const _handleSubmit = async (e) => {
    if (e) e.preventDefault();
  };

  return (
    <>
      {/* ADD NEW CHAT */}
      {/* {img?.isLoading && <div className="">Loading...</div>}
      {img?.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )} */}
      {/* {question && <div className="message user">{question}</div>}
      {answer && (
        <div className="message">
          <Markdown>{answer}</Markdown>
        </div>
      )} */}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" onSubmit={_handleSubmit} ref={formRef}>
        {/* <Upload setImg={setImg} /> */}
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
