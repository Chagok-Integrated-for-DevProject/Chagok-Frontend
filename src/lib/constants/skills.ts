import php from "/public/skills/akar-icons_php-fill.svg";
import unity from "/public/skills/bxl_unity.svg";
import c from "/public/skills/devicon_c.svg";
import git from "/public/skills/devicon_git.svg";
import kotlin from "/public/skills/devicon_kotlin.svg";
import mongoDB from "/public/skills/devicon_mongodb.svg";
import mysql from "/public/skills/devicon_mysql.svg";
import node from "/public/skills/devicon_nodejs.svg";
import spring from "/public/skills/devicon_spring.svg";
import svelte from "/public/skills/devicon_svelte.svg";
import next from "/public/skills/devicon_svelte.svg";
import ts from "/public/skills/devicon_typescript.svg";
import aws from "/public/skills/logos_aws.svg";
import figma from "/public/skills/logos_figma.svg";
import firebase from "/public/skills/logos_firebase.svg";
import flutter from "/public/skills/logos_flutter.svg";
import go from "/public/skills/logos_go.svg";
import graphql from "/public/skills/logos_graphql.svg";
import java from "/public/skills/logos_java.svg";
import js from "/public/skills/logos_javascript.svg";
import jest from "/public/skills/logos_jest.svg";
import kurbernetes from "/public/skills/logos_kubernetes.svg";
import nestjs from "/public/skills/logos_nestjs.svg";
import python from "/public/skills/logos_python.svg";
import react from "/public/skills/logos_react.svg";
import reactNative from "/public/skills/logos_react.svg";
import swift from "/public/skills/logos_swift.svg";
import vue from "/public/skills/logos_vue.svg";
import zeplin from "/public/skills/logos_zeplin.svg";
import express from "/public/skills/simple-icons_express.svg";
import django from "/public/skills/vscode-icons_file-type-django.svg";
import docker from "/public/skills/vscode-icons_file-type-docker2.svg";

/**
 * id => 서버에 전달할 값(임시)
 * skill => 프론트에서 ui로 쓸 값
 * img => svg
 */

export type TSkills = {
  id: string;
  skill: string;
  img: SVGGraphicsElement;
};

export const SKILLS = [
  { id: "js", skill: "JavaScript", img: js },
  { id: "ts", skill: "TypeScript", img: ts },
  { id: "react", skill: "React", img: react },
  { id: "vue", skill: "Vue", img: vue },
  { id: "svelte", skill: "Svelte", img: svelte },
  { id: "next", skill: "Nextjs", img: next },
  { id: "nodejs", skill: "Nodejs", img: node },
  { id: "java", skill: "Java", img: java },
  { id: "spring", skill: "Spring", img: spring },
  { id: "go", skill: "Go", img: go },
  { id: "nestjs", skill: "Nestjs", img: nestjs },
  { id: "python", skill: "Python", img: python },
  { id: "kotlin", skill: "Kotlin", img: kotlin },
  { id: "express", skill: "Express", img: express },
  { id: "mysql", skill: "MySQL", img: mysql },
  { id: "mongoDB", skill: "MongoDB", img: mongoDB },
  { id: "django", skill: "Django", img: django },
  { id: "php", skill: "php", img: php },
  { id: "graphql", skill: "GraphQL", img: graphql },
  { id: "firebase", skill: "Firebase", img: firebase },
  { id: "flutter", skill: "Flutter", img: flutter },
  { id: "swift", skill: "Swift", img: swift },
  { id: "reactNative", skill: "ReactNative", img: reactNative },
  { id: "unity", skill: "Unity", img: unity },
  { id: "aws", skill: "AWS", img: aws },
  {
    id: "kubernetes",
    skill: "Kubernetes",
    img: kurbernetes,
  },
  {
    id: "docker",
    skill: "Docker",
    img: docker,
  },
  {
    id: "git",
    skill: "Git",
    img: git,
  },
  {
    id: "figma",
    skill: "Figma",
    img: figma,
  },
  {
    id: "zeplin",
    skill: "Zeplin",
    img: zeplin,
  },
  {
    id: "jest",
    skill: "Jest",
    img: jest,
  },
  {
    id: "c",
    skill: "C",
    img: c,
  },
];
