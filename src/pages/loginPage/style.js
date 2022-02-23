import styled from "styled-components";

const AuthPageArea = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eef6ff;

  .AuthComponent {
    min-width: min(90vw, 340px);
    min-height: 450px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 25px 0;
    &.login{
      position: absolute;
      z-index: 2;
      animation: fade .5s ease-in-out forwards;
    }
    &.register{
      position: absolute;
      z-index: 1;
      width: 20px;
      animation: fade .5s ease-in-out forwards;
    }
    .wraperP{
        width: 45px;
        border-top: 2px solid #d5d5d5;
        margin: 15px;
    }
    .logo-area {
      display: flex;
      align-items: center;
      margin-top: 14px;
      .logo {
        display: flex;
        align-items: center;
       
        /* svg {
          margin: 0 10px;
          font-size: 26px;
          color: #f83697;
        } */
        .circle-1{
            width: 28px;
            height: 28px;
            background: linear-gradient(to bottom left, #E02AAC, #FF9921);
            border-radius: 50%;
            margin-right: 10px;
            position: relative;
            padding: 18px;
            

            &::before{
                content: '';
                position: absolute;
                inset: 0;
                background: white;
                border-radius: 50%;
                width: 26px;
                height: 26px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            .circle-2{
                width: 10px;
                height: 10px;
                background: linear-gradient(to bottom right, #E53D95, #FF9921);
                position: absolute;
                border-radius: 50%;
                top: -6px;
                right: -6px;

            }
        }
      }
      h2 {
        font-weight: 600;
      }
    }
    button, .loginBtn {
        margin: 13px 0;
        width: 80%;
        min-height: 38px;
        border-radius: 8px;
        font-weight: bolder;
        background: none;
        cursor: pointer;
        transition: all .3s ease;
        &:hover{
            opacity: .8;
        }
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px 0;
      .form-group{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        &.options{
          justify-content: space-between;
          align-items: flex-end;
          width: 83%;
          input[type="date"] {
            width: 55%;
            height: 30px;
          }
        }
        input{
          width: 40%;
          margin: 0 5px;
        }
        .option-area{
          display: flex;
          flex-direction: column;
          label{
            font-size: 13px;
            font-weight: 500;
            padding: 5px;
          }
          select{
              border: none;
              background-color: #eef6ff;
              padding: 5px;
          }
        }
      }
      input {
        margin: 10px 0;
        width: 83%;
        min-height: 30px;
        border: none;
        padding: 8px;
        box-shadow: none;
        background-color: #eef6ff;
        border-radius: 7px;

        &::placeholder{
            font-size: 12px;
        }
      }
      button {
        text-transform: uppercase;
        &[type="submit"] {
            border: none;
            color: white;
            background: linear-gradient(90deg, rgba(255,152,33,1) 0%, rgba(255,117,44,1) 26%, rgba(255,78,81,1) 48%, rgba(238,56,137,1) 71%, rgba(184,54,174,1) 100%);
        }
      }
    }
    .wraperLogin{
        width: 80%;
        height: 20px;
        position: relative;
        display: flex;
        justify-content: center;
        border-top: 2px solid #d5d5d5;
        p{
            position: absolute;
            color:#9f9f9f;
            background-color: white;
            top: -20px;
            padding: 10px;
            font-size: 14px;
            font-weight: 600;
        }
    }
    .btnFacebook{
        color:#1877F2 ;
        border: 2px solid #549fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        margin-bottom: 20px;
        svg{
            margin:0 10px;
            font-size: 20px;
        }
    }
    span{
        font-size: 13px;
        margin: 5px 0;
        font-weight: 600;
        cursor: pointer;
        &:hover{
            opacity: .8;
        }
        &.forgotPassword{
            color:#9f9e9e;
        }
        &.registerSpan{
            color: #549fff;
        }

    }
  } 
  @keyframes fade {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
`;

export default AuthPageArea;
