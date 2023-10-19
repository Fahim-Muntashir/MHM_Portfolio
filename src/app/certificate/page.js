import React from "react";
import "./style.css";
import Header from "../components/Header";

const getCertificates = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/certificates", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to fetch certificates");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading in  certificate:", error);
    throw error;
  }
};
const page = async () => {
  const { certificate } = await getCertificates();
  return (
    <div>
      <Header></Header>
      <div class="img-container my-10">
        {certificate.map((cft) => (
          <div class="box">
            <div class="imgBx">
              <img src={cft.imgLink} />
            </div>
            <div class="content">
              <div>
                <h2>{cft.title}</h2>
                <p>{cft.subTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
