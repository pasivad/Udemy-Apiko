const AppItem = ({ name, description, image }) => {
   return (
      <div className="appItem">
         <div>{name}</div>
         {image}
         <div>{description}</div>
      </div>
   );
};

export default AppItem;
