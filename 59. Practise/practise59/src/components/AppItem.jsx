function AppItem({ name, description, Image }) {
   return (
      <>
         <div>{name}</div>
         {Image}
         <div>{description}</div>
      </>
   );
}

export default AppItem;
