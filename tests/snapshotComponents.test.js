import TestRenderer from 'react-test-renderer';
import Button from '../components/Button.tsx';
import HeroLayout from '../components/HeroLayout.tsx';
import Icon from '../components/Icon.tsx';
import Home from '../pages/index.tsx';

it('renders correctly', () => {
  const tree = TestRenderer.create(
    <Button callback={() => {}} styles="btn-primary btn-lg w-28" />
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

it('renders correctly', () => {
  const tree = TestRenderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
