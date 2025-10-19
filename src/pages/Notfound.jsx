import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="mt-2 text-xl">존재하지 않는 페이지입니다.</h1>
      <Link className="hover:text-blue-600 text-xl font-extrabold" to={"/"}>
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default Notfound;
