import { Button } from '../Button';
import { BackButton } from './BackButton';
import { ContinueButton } from './ContinueButton';
import { PageFooterProps } from './PageFooterProps';
import { PageFooterWrap } from './PageFooterWrap';

export const PageFooter = ({
  buttons = [BackButton, ContinueButton],
}: PageFooterProps) => {
  return (
    <PageFooterWrap buttonsCount={buttons.length}>
      {buttons.map(({ text, color, onPress, disabled, loading }, index) => (
        <Button
          key={index}
          color={color ?? 'black'}
          onPress={onPress}
          disabled={disabled}
          loading={loading}
        >
          {text}
        </Button>
      ))}
    </PageFooterWrap>
  );
};
