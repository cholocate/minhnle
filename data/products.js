import traffic from "../static/img/Traffic Counting.png";
import demo from "../static/img/output.gif"

const products = [
    {
        title: "Advice Stall Counting",
        imgPath: demo,
        langauges: [], 
        description: "Resnet-based customized model to track customer behaviour in the medical stall area, coupling with ByteTrack to accomplish PharmaCity's counting accuracy demands."
    },
    {
        title: "Traffic Body Detection",
        imgPath: traffic,
        languages: [],
        description: "Tailoring YOLOX model to optimize body detection for Traffic Counting in Thiso Mall, achieving > 90% accuracy within any given time-frame and low latency."
    }
]

export default products; 