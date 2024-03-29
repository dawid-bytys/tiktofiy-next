import { prisma } from 'utils/db';
import { PrismaError } from 'utils/errors';
import type { SongFound } from 'utils/types';

export const getDatabaseSongByUrl = async (url: string) => {
  try {
    const song = await prisma.songs.findUnique({
      where: {
        url,
      },
    });
    return song;
  } catch (err) {
    throw new PrismaError('Something went wrong with database connection, try again');
  }
};

export const storeDatabaseSong = async (song: Omit<SongFound, 'isFound'> & { url: string }) => {
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

export const getDatabaseSongs = async (skip?: number, take?: number) => {
  try {
    const songs = await prisma.songs.findMany({
      skip,
      take,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return songs;
  } catch (err) {
    throw new PrismaError('Something went wrong with database connection, try again');
  }
};
