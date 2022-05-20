const useStyle = length => {
  return(
    {
      avatarBox: {
        position: "relative", 
        overflow: "hidden", 
        margin: "0", 
        width: length, 
        height: length, 
        cursor: "pointer"
      },
      profileFrame: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 3,
      },
      profileImg: {
        position: "relative",
        width: "96%",
        height: "96%",
        top: "2%",
        left: "2%",
        objectFit: "cover",
        zIndex: 2,
        clipPath: "polygon(3% 3%, 80% 5%, 100% 25%, 99% 99%, 22% 100%, 2% 80%)"
      }
    }
  )
}

export default useStyle;