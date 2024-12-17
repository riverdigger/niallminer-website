import { AttentionSeeker, Fade } from "react-awesome-reveal";

export default function Header({text}) {
    return(
        <div className="flex items-center sm:justify-start justify-between mb-4">
            <Fade triggerOnce>
                <h4 className="text-5xl ml-1 text-gray-900">{text}</h4>
            </Fade>
                <div className="flex-grow border-b border-gray-700 mx-8 hidden sm:block"></div>
            <Fade cascade duration="500">
                <AttentionSeeker effect="flash"><div className="transform skew-x-12 bg-red-400 w-2 sm:mr-1 mr-0">&nbsp;</div></AttentionSeeker>
                <AttentionSeeker effect="flash" delay="10"><div className="transform skew-x-12 bg-green-400 w-2 sm:mr-1 mr-0">&nbsp;</div></AttentionSeeker>
                <AttentionSeeker effect="flash" delay="20"><div className="transform skew-x-12 bg-blue-400 w-2">&nbsp;</div></AttentionSeeker>
            </Fade>
        </div>
    );
}