import TestRenderer from 'react-test-renderer';
import Button from '../components/Button';
import HeroLayout from '../components/HeroLayout';
import Icon from '../components/Icon';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <Button
      callback={() => {
        console.log('TEST');
      }}
      styles="btn-primary btn-lg w-28"
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = TestRenderer.create(<HeroLayout isDaytime />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = TestRenderer.create(<Icon iconID="04d" />).toJSON();
  expect(tree).toMatchSnapshot();
});
