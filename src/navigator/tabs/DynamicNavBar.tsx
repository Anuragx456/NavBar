/**
 * DynamicNavBar.tsx
 *
 * Wires CustomTabBar into @react-navigation/bottom-tabs.
 * Screen components live in their own files under components/.
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CustomTabBar from '@/components/CustomTabBar';
import PhotosScreen from '@/components/PhotosScreen';
import CollectionsScreen from '@/components/CollectionsScreen';
import CreateScreen from '@/components/CreateScreen';
import BackupScreen from '@/components/BackupScreen';

// ─────────────────────────────────────────────────────────────────────────────
// Route param list — extend when adding more screens
// ─────────────────────────────────────────────────────────────────────────────

export type TabParamList = {
  Photos: undefined;
  Collections: undefined;
  Create: undefined;
  Backup: undefined;
};

// ─────────────────────────────────────────────────────────────────────────────
// Navigator
// ─────────────────────────────────────────────────────────────────────────────

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
      // ⚠️  The tab bar uses position: 'absolute' so it floats above content.
      //     For a fully dynamic solution, use useBottomTabBarHeight() in each screen.
      // sceneContainerStyle={{ paddingBottom: 85 }}
    >
      <Tab.Screen
        name="Photos"
        component={PhotosScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Collections"
        component={CollectionsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Backup"
        component={BackupScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cloud" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}