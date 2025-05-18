import Button from "./ui/Button";

function Banner({children}) {
  return (
    <div
      className="flex items-center relative h-60 w-full bg-cover bg-center rounded-3xl text-white"
      style={{ backgroundImage: "url('/images/group.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

      <div className="relative z-10 pl-20">
        <div className="space-y-4">
          <div>
            {children}
          </div>
          <Button>Explore all Treks</Button>
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