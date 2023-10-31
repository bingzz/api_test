import Button from "../../components/button/button";
import useLogs from "../../hooks/useLogs";
import httpService from "../../services/httpService";
import './home.scss';

const name = 'Irving';

export default function Home() {
  const [log, setLog] = useLogs();

  function emitSuccess() {
    const message = 'Success API';
    setLog((prevLog: string[]) => [message, ...prevLog]);

    httpService.GET('success')
      .catch(error => {
        console.error(error);
      });
  }

  function emitError() {
    const message = 'Error API';
    setLog((prevLog: string[]) => [message, ...prevLog]);

    httpService.GET('error')
      .catch(error => {
        alert(error);
        console.error(error);
      });
  }

  function notFound() {
    const message = 'Not Found API'; // Check server to catch the response already sent error
    setLog((prevLog: string[]) => [message, ...prevLog]);

    httpService.GET('test')
      .catch(error => {
        console.error(error);
      });
  }

  function clearLogs() {
    console.clear();
    setLog([]);
  }

  return (
    <div className="Home">
      <h1>Welcome, {name}</h1>
      <h3>API Testing</h3>
      <div className="selection">
        <Button name="Success" clickEvent={emitSuccess}></Button>
        <Button name="Error" clickEvent={emitError}></Button>
        <Button name="Not Found" clickEvent={notFound}></Button>
        <Button name="Clear Logs" clickEvent={clearLogs}></Button>
      </div>
      <div className="log-container">
        {log.map((item: string, index: number) => <p key={index}>{log.length - index}: {item}</p>)}
      </div>
    </div>
  );
}