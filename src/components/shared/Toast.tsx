import { ReactNode, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import Poppins from '../text/Poppins';

const ToastContainer = styled(Animated.View)`
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const Message = styled(Poppins)`
  text-align: center;
  font-size: 16px;
`;

type ToastProps = {
  delay?: number;
  time?: number;
  children: ReactNode;
};

export default function Toast({ delay = 0, time = 1000, children }: ToastProps) {
  const toastPosY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.spring(toastPosY, {
          toValue: 80,
          useNativeDriver: true,
        }),
        Animated.spring(toastPosY, {
          toValue: -50,
          delay: time,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);
  }, []);

  return (
    <ToastContainer style={{ transform: [{ translateY: toastPosY }] }}>
      <Message type="500Medium">{children}</Message>
    </ToastContainer>
  );
}
