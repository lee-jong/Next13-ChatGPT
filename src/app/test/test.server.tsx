import { use } from "react";

const fetchData = async () => {
  let data: any = null;
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      console.log("서버에서 데이터 받음");
    });

  return data;
};

const apiTest = (): React.ReactElement => {
  const data = use(fetchData());
  if (data) {
    return <div>데이터 존재</div>;
  } else {
    return <div>데이터 미존재</div>;
  }
};

export default apiTest;
