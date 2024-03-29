import { useContext } from "react";
import NavigationContext from "../context/navigation";

// Custom hook we can use in Link and Route Components
function useNavigation() {
  return useContext(NavigationContext);
}
export default useNavigation;
