import Link from 'next/link';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Item = (length) => {
  const temp = [];

  for (let i = 0; i < length; i++) {
    temp.push(
      <li key={i} className="py-2 w-36 ">
        <Link className="DropdownContentLinks rounded-full" href="/">
          <KeyboardArrowLeftIcon />
          لورم ایپسوم
        </Link>
      </li>
    );
  }


  return (
    <ul className="p-2 divide-y w-fit flex flex-col">
    {temp}
  </ul>
  )
};

const DropDown = () => {
  return (
    <div className="bg-white p-2 rounded-md  z-30 absolute top-20 -right-10 flex invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-7 transition-all duration-300 ">
      {Item(5)}
      {Item(4)}
      {Item(4)}
    </div>
  );
};

export default DropDown;
