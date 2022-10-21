function AppWrapper({ title, children }) {
   return (
      <>
         <header className="header">{title}</header>
         <div>{children}</div>
      </>
   );
}

export default AppWrapper;
