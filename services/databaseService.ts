import { prisma } from 'utils/db';
import { PrismaError } from 'utils/errors';
import type { SongFound } from 'utils/types';

export const getSongByUrl = async (url: string) => {
  try {
    const storedTikTok = await prisma.songs.findUnique({
      where: {
        url: url,
      },
    });
    return storedTikTok;
  } catch (err) {
    throw new PrismaError('Something went wrong with database connection, try again');
  }
};

export const storeSong = async (song: Omit<SongFound, 'isFound'> & { url: string }) => {
  try {
    await prisma.songs.create({
      data: {
        url: song.url,
        artist: song.artist,
        title: song.title,
        albumImage: song.albumImage,
      },
    });
  } catch (err) {
    throw new PrismaError('Something went wrong with database connection, try again');
  }
};

export const getSongs = async (skip?: number, take?: number) => {
  try {
    const songs = await prisma.songs.findMany({
      skip,
      take,
    });
    return songs;
  } catch (err) {
    throw new PrismaError('Something went wrong with database connection, try again');
  }
};
