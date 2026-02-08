import React from 'react';
import { Button as TButton, XStack } from 'tamagui';
import { RefreshCcw, Settings } from '@tamagui/lucide-icons';

export default function ActionButtons({ navigation, onRefresh }: { navigation: any; onRefresh: () => void; }) {
  return (
    <XStack gap={8}>
      <TButton icon={<RefreshCcw size={18} color="$color10" />} circular size="$3" backgroundColor="transparent" onPress={onRefresh} chromeless />
      <TButton icon={<Settings size={18} color="$color10" />} circular size="$3" backgroundColor="transparent" onPress={() => navigation.navigate('Settings', {})} chromeless />
    </XStack>
  );
}
