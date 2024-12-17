export default function Tag({text, i}) {
    return(
        <div className={"flex items-center whitespace-nowrap justify-center rounded md:w-1/4 shadow-md text-white mx-1 px-2" + (i % 4 === 0 ? " bg-red-400" : "" ) + (i % 4 === 1 ? " bg-green-500" : "" ) + (i % 4 === 2 ? " bg-indigo-500" : "" ) + (i % 4 === 3 ? " bg-yellow-500" : "" )}>
            {text}
        </div>
    );
}