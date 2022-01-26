import styled from "styled-components"

const DessertsListStyle = styled.div`
    text-align: center;
    padding: 40px;
    border-radius: 10px;
    background: lightblue;
    order: 2;

    .dessert_grid{
        display: grid;
        grid-template-columns: 1fr 1fr;

    }

    .dessert_item{
        display: flex;
        background: white;

        .image{
            flex: 1;
        }
        .info{
            flex: 1;
        }
        .info_content{
            padding: 25px;
        }

        img{
            width: 100%;
            height: 100%;
        }
    }
    .dessert_item:nth-child(4n+1), .dessert_item:nth-child(4n+2){
        background: #00a79d;
        color: white;

        .image{
            order: 2;
        }
        .info{
            order: 1;
        }
    }

    .title{
        font-weight: bold;
        font-size: 16px;
    }
    .description{
        font-size: 11px;
    }
`;

export default DessertsListStyle;