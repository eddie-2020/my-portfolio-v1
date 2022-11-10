const onButtonClick = () => {
  // Getting PDF files
  fetch("Resume.pdf").then((res) => {
    res.blob().then((blob) => {
      // Create new obj of PDF file
      const fileURL = window.URL.createObjectURL(blob);

      // Set various prop values
      let isalink = document.createElement("a");
      isalink.href = fileURL;
      isalink.download = "Resume.pdf";
      isalink.click();
    });
  });
};

export default onButtonClick;