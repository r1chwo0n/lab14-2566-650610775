"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your rating
      </Title>

      <Rating size="lg" />

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      ></Textarea>

      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Divider my="sm" />

      <Group position="center">
        <Title order={4} mt="s" align="center">
          Elon Musk
        </Title>
        <Rating value={5} readOnly></Rating>
      </Group>
      <Text color="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm" />

      <Group position="center">
        <Title order={4} mt="s" align="center">
          Mark Zuck
        </Title>
        <Rating value={4} readOnly></Rating>
      </Group>
      <Text color="dimmed" align="center">
        My favourite part is pepperoni
      </Text>

      <Pagination
        total={20}
        color="orange"
        mt="md"
        position="center"
      ></Pagination>

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Nawawan Thaichim 650610775
      </Text>
    </Container>
  );
}
