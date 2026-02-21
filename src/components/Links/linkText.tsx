


const OuterLink: React.FC<{ text: string; link: string }> = (props) => {
  return (
    <>
      {" "}
      <a href={props.link} target="_blank" rel="noreferrer noopener">
        {props.text}
      </a>
    </>
  );
};

export default OuterLink