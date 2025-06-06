import Button from "./ui/Button";

function Banner({children, className,img}) {
  return (
    <div
      className={`flex items-center relative h-80 bg-cover bg-center rounded-3xl text-white ${className}`}
      style={{ backgroundImage: `url('http://d2ware8nn8r7m2.cloudfront.net/images/${img}.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

      <div className="relative z-10 pl-20">
        <div className="space-y-8">
          <div>
            {children}
          </div>
          {/* <Button>Explore all Treks</Button> */}
        </div>
      </div>
    </div>
  );
}

function Title({children}){
    return(
        <p className="text-4xl font-bold">{children}</p>
    )
}
function Desc({children}){
    return(
        <p className="text-xl font-bold">{children}</p>
    )
}

export {Title, Desc, Banner};