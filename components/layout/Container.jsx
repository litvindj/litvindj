const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-480 mx-auto px-4 sm:px-6 lg:px-12 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
