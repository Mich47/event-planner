import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  min-width: 272px;
  max-width: 332px;
  /* height: 480px; */
  box-shadow: var(--shadow-primary);
  background-color: var(--background-color-primary);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 168px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* padding: 12px; */
`;

export const MarkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

// export const DescContainer = styled.div`
//   /* margin-top: -40px; */
//   position: absolute;
//   left: 0;
//   bottom: -56px;
//   width: 100%;

//   transform: ${({ $isMouseOver }) =>
//     $isMouseOver ? "translateY(-56px)" : "translateY(0)"};

//   transition: transform 300ms;
// `;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Wrapper = styled.div`
  padding: 24px 16px 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: var(--background-color-primary);
`;

// export const DataTimeContainer = styled.div`
//   padding: 8px 16px;
//   display: flex;
//   justify-content: space-between;
//   background-color: var(--background-color-translucent);
// `;

// export const DataTimeText = styled.p`
//   color: var(--color-accent);
//   font-size: 14px;
//   font-weight: 400;
//   line-height: 24px;
// `;

// export const Title = styled.h2`
//   color: var(--text-color-title);
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 24px;
// `;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
