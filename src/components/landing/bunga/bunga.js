const Bunga = ({ title, content }) => {
    return (
      <div className="col-span-1 md:col-span-4 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{content}</p>
      </div>
    );
  };
  
  export default Bunga;