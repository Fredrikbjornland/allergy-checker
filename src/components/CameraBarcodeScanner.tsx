import React from 'react';
import { useZxing } from 'react-zxing';

interface CameraBarcodeScannerProps {
  onScan: (barcode: string) => void;
}

const CameraBarcodeScanner: React.FC<CameraBarcodeScannerProps> = ({ onScan }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      onScan(result.getText());
    },
  });

  return (
    <div className="mt-4">
      <video ref={ref} className="w-full max-w-md h-auto" />
    </div>
  );
};

export default CameraBarcodeScanner;