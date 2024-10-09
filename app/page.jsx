import Image from "next/image";
import natureImage from "../assets/images.jpg"


export default function Home(){

  return(
    <div>
    <Image
src={natureImage}
alt={"Mountains and Lake"}
width={500}

/>
<Image
src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
alt="Mountains with snow and clear lake"
width={500}
height={300}
/>
</div>


  );
}  