import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axiosConfig from "../../axios";
import "./Index.css";

export default function Index() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    let i = 1;
    const data = [];
    const fectch = async () => {
      while (i < 50) {
        const f = await axiosConfig.get(`/${i}.json`);
        data.push(f.data);
        i++;
      }
      setDatas(data);
    };
    fectch();
  }, []);

  // console.log(datas.length > 48 ? datas : "loading");

  return (
    <div>
      <Container>
        <table>
          <tbody>
          {datas.map((data, i) => {
            return (
              <tr className="athing" key={i + 1}>
                <td className="title">
                  <span className="rank">{i + 1}.</span>
                </td>
                <td className="votelinks">
                  <div className="text-center">
                    <a className="cursor" href="/">
                      <div className="votearrow" title="upvote"></div>
                    </a>
                  </div>
                </td>
                <td className="title">
                  <a className="storylink"  href={data.url}>
                  {data.title}
                  </a>
                  <span className="sitebit comhead">
                    (
                    <a href={data.url}>
                      <span className="sitestr">data.url</span>
                    </a>
                    )
                  </span>
                </td>
              <br></br>
                <td colSpan="2"></td>
            <td className="postDetails">
              <span className="score">{data.score} points</span> by{" "}
              <a className="hnuser" href="/">
              {data.by}
              </a>
              <span>
                <a className="time" href="/">
                  2 hours ago
                </a>
              </span>{" "}
              |{" "}
              <a href="/" className="pointer">
                hide
              </a>{" "}
              | <a href="/">{data.descendants} comment</a>
            </td>
              </tr>
          
            );
          })}

          {/* <tr>
            <td colSpan="2"></td>
            <td className="postDetails">
              <span className="score">43 points</span> by{" "}
              <a className="hnuser" href="/">
                Anon84
              </a>
              <span>
                <a className="time" href="/">
                  2 hours ago
                </a>
              </span>{" "}
              |{" "}
              <a href="/" className="pointer">
                hide
              </a>{" "}
              | <a href="/">1 comment</a>
            </td>
          </tr> */}
          </tbody>
        </table>
      </Container>
    </div>
  );
}
