const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex w-full max-w-7xl justify-between gap-4 p-4">
        <div className="w-1/2 flex items-center p-4 rounded-lg">
          <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
            To do list
          </h1>
        </div>
        <div className="w-1/2 p-4 rounded-lg">
          <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
