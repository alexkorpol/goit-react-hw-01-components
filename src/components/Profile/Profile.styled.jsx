import styled from "styled-components"

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
`
// export const TaskNumber = styled.h2`
// font-size: 40px;
//   font-weight: 700;
//   background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/78779/heart.png");
//   background-position: 0 1.4em;
//   background-size: 15px 9px;
//   color: #e8665f;
//   background-repeat: repeat-x;
// `
export const Description = styled.div`
  background-color: #f4f0ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 350px;
  box-shadow: 1rem 6rem 3rem rgb(65, 64, 64), -1rem -1rem 3rem rgb(82, 81, 81);
`
export const Avatar = styled.img`
  display: block;
  width: 200px;
  margin-top: 20px;
  border-radius: 5px;
`
export const Name = styled.p`
  font-size: 22px;
  line-height: 1.62;
  font-weight: 20px;
  color: #000000;
  margin-top: 20px;
`
export const Text = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 18px;
`
export const Stats = styled.ul`
  background-color: #fff;
  width: 350px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const StatsList = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-top: 1px solid #101030;
  :not(:last-child) {
    border-right: 1px solid #101030;
  }
  :not(:last-child) span {
    border-right: none;
  }
`
export const SpanLabel = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  justify-content: center;
`
export const SpanQuantity = styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: bold;
  margin: 10px auto;
`
