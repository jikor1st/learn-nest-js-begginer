import { useEffect } from "react";
const TestPage = () => {
  useEffect(() => {
    // fetch("http://localhost:4000/users").then(() => {});
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "지기역",
        email: "jigiyeok@email.com",
        password: "1234",
      }),
    }).then(() => {});
  }, []);
  return <></>;
};

export default TestPage;
