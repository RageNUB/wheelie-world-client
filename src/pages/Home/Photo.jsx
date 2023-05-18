
const Photo = ({children}) => {
    return (
        <a href={children}>
          <img className="max-w-xs inline w-full" src={children} />
        </a>
    );
};

export default Photo;